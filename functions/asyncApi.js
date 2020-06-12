const fetch = require('node-fetch');

const postId = 'posts/1';

const getComments = async (id) => {
  let commentsData = await fetch(`https://jsonplaceholder.typicode.com/${id}/comments`);

  let comments = commentsData.json();

  return comments;
}

const getPostDetail = async (id) => {
  let postData = await fetch(`https://jsonplaceholder.typicode.com/${id}`);

  let postDetail = postData.json();

  return postDetail;
}

const getResult = async () => {
  const comments = await getComments(postId);
  const postDetail = await getPostDetail(postId);

  postDetail.commentsCount = comments.length;
  postDetail.comments = comments;

  console.log(postDetail);
}

getResult();
