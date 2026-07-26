import os
import pickle
import numpy as np
import torch

from PIL import Image
from tqdm import tqdm

from model import model, preprocess, device

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATASET_FOLDER = os.path.join(BASE_DIR, "dataset")
EMBEDDINGS_FOLDER = os.path.join(BASE_DIR, "embeddings")

# Create embeddings folder if it doesn't exist
os.makedirs(EMBEDDINGS_FOLDER, exist_ok=True)

image_paths = []
embeddings = []

# Loop through every image
for filename in tqdm(os.listdir(DATASET_FOLDER)):

    if filename.lower().endswith((".jpg", ".jpeg", ".png")):

        image_path = os.path.join(DATASET_FOLDER, filename)

        image = Image.open(image_path).convert("RGB")

        image_tensor = preprocess(image).unsqueeze(0).to(device)

        with torch.no_grad():

            embedding = model.encode_image(image_tensor)

            embedding /= embedding.norm(dim=-1, keepdim=True)

        embeddings.append(
            embedding.cpu().numpy()[0]
        )

        image_paths.append(image_path)

# Save embeddings
np.save(
    os.path.join(EMBEDDINGS_FOLDER, "embeddings.npy"),
    np.array(embeddings)
)

# Save image paths
with open(
    os.path.join(EMBEDDINGS_FOLDER, "image_paths.pkl"),
    "wb"
) as f:

    pickle.dump(image_paths, f)

print("\nDone!")
print(f"Generated embeddings for {len(image_paths)} images.")