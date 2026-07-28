import os
import shutil

from fastapi import APIRouter, UploadFile, File, Request

from app.services import search_similar_images

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.get("/")
def home():
    return {
        "message": "Image Similarity Search API is Running!"
    }


@router.get("/health")
def health():
    return {
        "status": "healthy",
        "message": "API is running"
    }


@router.post("/upload")
async def upload(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "message": "Upload successful"
    }


@router.post("/search")
async def search(
    request: Request,
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    results = search_similar_images(file_path)

    for item in results:

        filename = os.path.basename(item["image"])

        item["image"] = (
            str(request.base_url)
            + f"dataset/{filename}"
        )

    return {
        "query": file.filename,
        "matches": results
    }