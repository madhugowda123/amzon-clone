import React, { useState } from "react";

export default function LikeTable() {
  const [like, setLike] = useState(0);
  const [likes, setLikes] = useState(0);
  const [likess, setLikess] = useState(0);

  return (
    <div>
      <table
        className="table  table-bordered table-hover"
        style={{ width: 1000, marginLeft: 150 }}
      >
        <thead className="table-dark">
          <tr>
            <th scope="col">Likes</th>
            <th scope="col">Technologies</th>
            <th scope="col">LikeButton</th>
            <th scope="col">ResetButton</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              {like}
            </th>
            <td>React-JS</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLike(like + 1)}
              >
                Like
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLike(0)}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              {likes}
            </th>
            <td>Angular</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLikes(likes + 1)}
              >
                Like
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLikes(0)}
              >
                Reset
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              {likess}
            </th>
            <td>JavaScript</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLikess(likess + 1)}
              >
                Like
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => setLikess(0)}
              >
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
