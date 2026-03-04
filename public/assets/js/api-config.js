// ═══════════════════════════════════════════════
//  API CONFIGURATION
// ═══════════════════════════════════════════════

// Detect if we're in public folder or root
const currentPath = window.location.pathname;
const isInPublic = currentPath.includes('/public/');

// Set API base URL accordingly
const API_BASE_URL = isInPublic 
  ? window.location.origin + '/NexTopup-Web/api'
  : window.location.origin + '/api';

console.log('API Base URL:', API_BASE_URL);

const API = {
  auth: `${API_BASE_URL}/auth.php`,
  products: `${API_BASE_URL}/products.php`,
  orders: `${API_BASE_URL}/orders.php`,
  users: `${API_BASE_URL}/users.php`,
};

// API Helper Functions
async function apiRequest(url, options = {}) {
  try {
    console.log('API Request to:', url);
    console.log('Options:', options);
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    console.log('Response status:', response.status);
    
    // Get response as text first to see what we got
    const text = await response.text();
    console.log('Response text:', text);
    
    // Try to parse as JSON
    try {
      const data = JSON.parse(text);
      console.log('Response data:', data);
      return data;
    } catch (e) {
      console.error('JSON Parse Error:', e);
      console.error('Response was:', text);
      return { success: false, message: 'Server error: ' + text.substring(0, 100) };
    }
  } catch (error) {
    console.error('API Error:', error);
    console.error('URL was:', url);
    return { success: false, message: 'Network error: ' + error.message };
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
