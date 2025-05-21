// App.js
"use client";
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);   // 用来保存后端返回的数据
  const [loading, setLoading] = useState(true); // 是否正在加载

  // 页面一加载，就执行 fetch 请求
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')  // 1. 请求数据
      .then(response => response.json())                 // 2. 转成 JSON
      .then(data => {
        setPosts(data);      // 3. 保存数据
        setLoading(false);   // 4. 关闭 loading 状态
      })
      .catch(error => {
        console.error('出错了:', error);
        setLoading(false);
      });
  }, []);  // [] 表示只执行一次（组件加载时）

  return (
    <div>
      <h1>文章列表</h1>
      {loading ? (
        <p>正在加载中...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
