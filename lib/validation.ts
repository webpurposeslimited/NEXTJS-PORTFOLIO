// Debounce function to limit how often a function is called
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Form validation types
export interface ValidationResult {
  valid: boolean;
  message: string;
}

export interface FormErrors {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

// Comprehensive validation rules
export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { valid: false, message: "Name is required" };
  }
  
  if (name.trim().length < 2) {
    return { valid: false, message: "Name must be at least 2 characters" };
  }
  
  if (name.trim().length > 50) {
    return { valid: false, message: "Name must be less than 50 characters" };
  }
  
  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    return { valid: false, message: "Name contains invalid characters" };
  }
  
  return { valid: true, message: "" };
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { valid: false, message: "Email is required" };
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address" };
  }
  
  if (email.length > 100) {
    return { valid: false, message: "Email is too long" };
  }
  
  return { valid: true, message: "" };
};

export const validateMessage = (message: string): ValidationResult => {
  if (!message.trim()) {
    return { valid: false, message: "Message is required" };
  }
  
  if (message.trim().length < 10) {
    return { valid: false, message: "Message must be at least 10 characters" };
  }
  
  if (message.trim().length > 1000) {
    return { valid: false, message: "Message must be less than 1000 characters" };
  }
  
  return { valid: true, message: "" };
};

// Helper function to check if the entire form is valid
export const isFormValid = (errors: FormErrors): boolean => {
  return Object.values(errors).every(error => error === "");
};
