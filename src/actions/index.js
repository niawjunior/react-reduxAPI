import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'ibukk3o7t3n8';
const API_TOKEN = '98a8b90a40479a69fffb39e6dadf0a36e17384855c6f03ffeea9954467f100c5';
export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}