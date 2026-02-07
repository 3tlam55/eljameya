import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const API_KEY = process.env.API_KEY || ''; 

const initializeChat = () => {
  if (!API_KEY) {
    console.warn("API Key not found for Gemini Service");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `
          أنت مساعد ذكي للجمعية الشرعية الرئيسية (Al-Gam'iya Al-Shar'iya).
          
          معلومات عن الجمعية:
          - الشعار: "والله في عَوْن العبد ما كان العبد في عَوْن أخيه".
          - الرسالة: لتعاون العاملين بالكتاب والسنة - رحمة الناس ونفعهم.
          - الرؤية: القضاء على الجهل والفقر والمرض.
          - الأمين العام: الأستاذ مصطفى إسماعيل.
          
          أهم المشاريع:
          - كفالة الأيتام (مشروع رفيق النبي).
          - تيسير الزواج.
          - حضانات الأطفال المبتسرين.
          - مراكز الأشعة والغسيل الكلوي (مجاناً).
          - محطات تنقية المياه.
          - القوافل الطبية والإغاثية.
          - مشروع النخيل.
          
          دورك:
          الرد على استفسارات المتبرعين والمحتاجين بأسلوب مهذب يعكس قيم الجمعية الإسلامية.
          شجع على التبرع واذكر طرق التبرع.
        `,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "عذرًا، خدمة المساعد الذكي غير متاحة حاليًا.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "جزاكم الله خيراً، لم أفهم السؤال تماماً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "واجهت مشكلة في الاتصال بالخادم. يرجى المحاولة مرة أخرى لاحقًا.";
  }
};