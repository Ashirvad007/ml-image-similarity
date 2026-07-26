from fastapi import FastAPI, UploadFile, File, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from .search import search_similar_images

app = FastAPI(
    title="Image Similarity Search API",
    description="API for searching visually similar images using OpenCLIP embeddings.",
    version="1.0.0"
)

# Allow React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve dataset images
app.mount("/dataset", StaticFiles(directory="dataset"), name="dataset")

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "Image Similarity Search API is Running!"
    }


@app.post("/search")
async def search(request: Request, file: UploadFile = File(...)):

    # Save uploaded image
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Search for similar images
    results = search_similar_images(file_path)

    # Convert local image paths into accessible URLs
    for item in results:
        filename = os.path.basename(item["image"])
        item["image"] = str(request.base_url) + f"dataset/{filename}"

    return {
        "results": results
    }