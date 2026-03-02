// ═══════════════════════════════════════════════
//  API CONFIGURATION
// ═══════════════════════════════════════════════

const API_BASE_URL = 'http://localhost/NexTopup-Web/api';

const API = {
  auth: `${API_BASE_URL}/auth.php`,
  products: `${API_BASE_URL}/products.php`,
  orders: `${API_BASE_URL}/orders.php`,
  users: `${API_BASE_URL}/users.php`,
};

// API Helper Functions
async function apiRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, message: 'Network error' };
  }
}

async function apiGet(url) {
  return apiRequest(url, { method: 'GET' });
}

async function apiPost(url, body) {
  return apiRequest(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

async function apiPut(url, body) {
  return apiRequest(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}
