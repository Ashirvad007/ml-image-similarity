import torch
import open_clip

# Check whether a GPU is available.
# If not, use the CPU.
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load the pretrained OpenCLIP model and preprocessing function.
model, _, preprocess = open_clip.create_model_and_transforms(
    "ViT-B-32",
    pretrained="laion2b_s34b_b79k"
)

# Move the model to the selected device.
model = model.to(device)

# Set the model to inference mode.
model.eval()