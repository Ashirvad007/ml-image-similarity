from datasets import load_dataset
import os

# Load the 1000-image WikiArt subset
dataset = load_dataset("HiFei4869/wikiart_subset_1000", split="train")

# Create dataset folder
os.makedirs("dataset", exist_ok=True)

print(f"Saving {len(dataset)} images...")

for i, item in enumerate(dataset):
    image = item["image"]
    image = image.convert("RGB")
    image.save(f"dataset/image_{i:04d}.jpg")

print("Done!")