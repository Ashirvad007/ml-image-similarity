# 🖼️ Image Similarity Search

![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)
![OpenCLIP](https://img.shields.io/badge/OpenCLIP-ViT--B--32-orange)
![License](https://img.shields.io/badge/License-Educational-lightgrey)

An AI-powered Image Similarity Search application that retrieves visually similar images using **OpenCLIP embeddings** and **Cosine Similarity**. The project consists of a **FastAPI backend**, a **React frontend**, and is fully containerized using **Docker**.

---

# 📖 Project Overview

Image Similarity Search is a computer vision application that allows users to upload an image and retrieve the **Top 5 visually similar images** from a dataset.

Instead of comparing filenames or metadata, the application compares the **visual features** of images by generating embeddings using **OpenCLIP** and ranking them using **Cosine Similarity**.

---

# 🎯 Objectives

- Develop an AI-powered image similarity search engine.
- Generate image embeddings using OpenCLIP.
- Compare embeddings using cosine similarity.
- Build a responsive React frontend.
- Expose REST APIs using FastAPI.
- Deploy the application using Docker.

---

# ✨ Features

- 📤 Upload an image from your device
- 🧠 Feature extraction using OpenCLIP (ViT-B-32)
- 🔍 Retrieve the Top 5 visually similar images
- 📊 Display cosine similarity scores
- 🎨 Modern React UI with drag-and-drop upload
- ⚡ FastAPI REST API
- 🐳 Docker & Docker Compose support
- 📦 Modular backend architecture

---

# 🛠️ Tech Stack

## Backend

- Python
- FastAPI
- OpenCLIP
- PyTorch
- NumPy
- Scikit-learn
- Pillow

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React

## Tools

- Docker
- Docker Compose
- Git
- GitHub

---

# 📂 Project Structure

```text
ml-image-similarity/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── routes.py
│   ├── services.py
│   ├── embed.py
│   └── model.py
│
├── dataset/
│
├── embeddings/
│   ├── embeddings.npy
│   └── image_paths.pkl
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── uploads/
│
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
├── README.md
└── .gitignore
```

---

# 🏗️ Backend Architecture

The backend follows a modular FastAPI architecture for better maintainability.

| File | Purpose |
|------|----------|
| `main.py` | FastAPI application entry point |
| `routes.py` | Defines API endpoints |
| `services.py` | Contains business logic for image search |
| `model.py` | Loads the OpenCLIP model |
| `embed.py` | Generates image embeddings |

---

# 🧠 Model Used

## OpenCLIP

**Model:** ViT-B-32

**Pretrained Weights:** laion2b_s34b_b79k

The OpenCLIP model converts every image into a high-dimensional feature vector (embedding). Images with similar visual content generate similar embeddings, making similarity search efficient and accurate.

---

# ⚙️ How It Works

1. Generate embeddings for all images in the dataset.
2. Store embeddings locally.
3. Upload a query image.
4. Generate an embedding for the uploaded image.
5. Calculate cosine similarity with all stored embeddings.
6. Sort similarity scores.
7. Return the Top 5 most similar images.

---

# 📊 Similarity Metric

The application uses **Cosine Similarity** to compare image embeddings.

Higher cosine similarity indicates that two images are visually more similar.

---

# ⚡ Performance

- Embeddings are generated once and stored locally.
- Image search uses precomputed embeddings for faster retrieval.
- Returns the Top 5 similar images within milliseconds for moderate-sized datasets.

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/health` | Health check |
| POST | `/upload` | Upload an image |
| POST | `/search` | Search for similar images |

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/Ashirvad007/ml-image-similarity.git

cd ml-image-similarity
```

---

## Backend Setup

```bash
python -m venv venv

source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

---

# ▶️ Run the Application

## Start Backend

```bash
uvicorn app.main:app --reload
```

Backend:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

## Start Frontend

```bash
cd frontend

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 🐳 Run with Docker

Build and start the complete application:

```bash
docker compose up --build
```

This launches:

- FastAPI Backend
- React Frontend
- Shared volumes for uploads and embeddings

Stop the application:

```bash
docker compose down
```

---

# 📷 Screenshots

## 🏠 Home Page

The landing page where users can upload an image.

```text
screenshots/home.png
```

---

## 📤 Upload Image

Users can drag & drop or browse an image before searching.

```text
screenshots/upload.png
```

---

## 🔍 Search Results

Displays the Top 5 visually similar images along with cosine similarity scores.

```text
screenshots/results.png
```

---

# 🌟 Future Enhancements

- Integrate FAISS for scalable similarity search.
- Support multiple embedding models.
- Batch image search.
- Search history.
- User authentication.
- Cloud deployment.
- Real-time embedding updates.

---

# 👨‍💻 Author

**Ashirvad Janardanan**

B.Tech Computer Science Engineering (Artificial Intelligence & Machine Learning)

GitHub:
https://github.com/Ashirvad007

---

# 📜 License

This project was developed as part of an internship assignment for educational purposes.