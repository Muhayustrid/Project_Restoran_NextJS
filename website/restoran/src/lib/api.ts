import axios from 'axios';

// Konfigurasi base URL untuk API Django
const API_BASE_URL = 'http://localhost:8000/api'; //Gunakan untuk development
// const API_BASE_URL = 'https://serversakkarep-production.up.railway.app/api'; //Gunakan untuk production

// Tipe data untuk berbagai entitas
export interface Menu {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
}

export interface Category {
    id: number;
    name: string;
    description?: string;
}

export interface RestaurantProfile {
    id: number;
    name: string;
    logo: string;
    about_us: string;
    address: string;
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
    twitter: string;
}

export interface OpeningHour {
    id?: number;
    day: string;
    opening_time: string;
    closing_time: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
    photo?: string;
}

export interface GalleryItem {
    id: number;
    title: string;
    image?: string;
}

export interface Chef {
    id: number;
    name: string;
    role: string;
    photo?: string;
}

// Fungsi untuk mengambil data dari API
export const fetchMenus = async (): Promise<Menu[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menus/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menus:', error);
        return [];
    }
};

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menus/categories/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const fetchRestaurantProfile = async (): Promise<RestaurantProfile[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/profile/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurant profile:', error);
        return [];
    }
};

export const fetchOpeningHours = async (): Promise<OpeningHour[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/opening-hour/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching opening hours:', error);
        return [];
    }
};

export const fetchFAQs = async (): Promise<FAQ[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/faq/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return [];
    }
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/testimonials/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
};

export const fetchGallery = async (): Promise<GalleryItem[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/gallery/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching gallery:', error);
        return [];
    }
};

export const fetchChefs = async (): Promise<Chef[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chefs/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chefs:', error);
        return [];
    }
};