import os
import pickle
import numpy as np
import torch

from PIL import Image
from sklearn.metrics.pairwise import cosine_similarity

from .model import model, preprocess, device

# Base directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Load saved embeddings
embeddings = np.load(
    os.path.join(BASE_DIR, "embeddings", "embeddings.npy")
)

# Load image paths
with open(
    os.path.join(BASE_DIR, "embeddings", "image_paths.pkl"),
    "rb"
) as f:
    image_paths = pickle.load(f)


def search_similar_images(query_image_path, top_k=5):

    # Load query image
    image = Image.open(query_image_path).convert("RGB")

    image_tensor = preprocess(image).unsqueeze(0).to(device)

    # Generate embedding
    with torch.no_grad():
        query_embedding = model.encode_image(image_tensor)
        query_embedding /= query_embedding.norm(dim=-1, keepdim=True)

    query_embedding = query_embedding.cpu().numpy()

    # Compute cosine similarity
    similarities = cosine_similarity(
        query_embedding,
        embeddings
    )[0]

    # Sort from highest similarity to lowest
    sorted_indices = np.argsort(similarities)[::-1]

    results = []

    for index in sorted_indices:

        score = float(similarities[index])

        # Skip identical uploaded image
        if score > 0.995:
            continue

        results.append({
            "image": image_paths[index],
            "score": score
        })

        if len(results) == top_k:
            break

    return results  