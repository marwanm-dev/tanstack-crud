# React + Vite + TypeScript CRUD App

This is a modern CRUD application built using **React**, **Vite**, and **TypeScript** with full integration of **Redux Toolkit**, **TanStack Query**, **TanStack Table**, **Axios**, and **Tailwind CSS v4**. It fetches post data from `jsonplaceholder.typicode.com`, stores it in Redux, and supports full Create, Read, Update, and Delete operations.

---

## ⚙️ Tech Stack

* **Frontend**: React, TypeScript, Vite
* **State Management**: Redux Toolkit
* **Server State Handling**: TanStack Query
* **Table Rendering**: TanStack Table v8
* **HTTP Client**: Axios
* **Styling**: Tailwind CSS v4

---

## 📁 Folder Structure

```
.
├── app/
│   └── store.ts
├── components/
│   ├── Modal.tsx
│   └── Table.tsx
├── features/
│   └── posts/
│       ├── PostForm.tsx
│       ├── PostView.tsx
│       ├── postsAPI.ts
│       ├── postsSlice.ts
│       └── types.ts
├── hooks/
│   ├── useAppDispatch.ts
│   ├── useAppSelector.ts
│   └── usePostsData.ts
├── lib/
│   └── axiosInstance.ts
├── utils/
│   └── getMEX.ts
└── main.tsx / App.tsx
```

---

## 🚀 Features

* Fetch posts using TanStack Query and cache data.
* Store and manipulate posts in Redux state.
* Perform Create, Read, Update, Delete (CRUD) operations.
* Show posts in a fully sortable and searchable table.
* Generate the smallest available ID (Mex) for new posts.
* Responsive, styled UI with Tailwind CSS v4.

---

## 🧠 Concepts Demonstrated

* Decoupling server state (TanStack Query) from global app state (Redux).
* Custom reusable hooks (`usePostsData`, `useSortedFilteredPosts`, `useAppDispatch`, etc).
* Dynamic table rendering with sorting/search.
* Controlled components with trimmed input values.
* Conditionally showing scrollbars based on content height.
* Efficient modal UI for editing/creating posts.

---

## 📝 Setup Instructions

1. **Clone this repo**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

---

## 🧪 Notes

* Data comes from the fake REST API: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/posts)
* MEX (Minimum Excluded Value) ensures unique post IDs even when posts are deleted.

---

## Live Demo

* https://tanstack-crud-flame.vercel.app/

---
