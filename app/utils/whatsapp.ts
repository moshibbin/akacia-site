import axios from 'axios';
import router from 'next/router';

const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';
const phoneNumber = '+252653140475';

export async function sendMessage(message: string,) {
    try {
        const url = `${WHATSAPP_API_URL}?phone=${phoneNumber}&text=${message}`;
        const response = await axios.get(url);
        // router.push('/');
        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw error;
    }
}