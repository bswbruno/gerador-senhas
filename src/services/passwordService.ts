// services/passwordService.ts
type GeneratePassOptions = {
  length: number; // quantidade de caracteres
  selectedOptions?: string[]; // opções selecionadas: ["numerico", "letras", "simbolo"]
};

export default function generatePass({
  length,
  selectedOptions = [], // fallback para array vazio
}: GeneratePassOptions): string {
  let characters = "";

  // adiciona os conjuntos de caracteres conforme as opções
  if (selectedOptions.includes("numerico")) {
    characters += "0123456789";
  }
  if (selectedOptions.includes("letras")) {
    characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (selectedOptions.includes("simbolo")) {
    characters += "!@#$%^&*()-_=+[]{};:,.<>?";
  }

  // fallback: se nada foi selecionado, usar letras + números
  if (!characters) {
    characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  // gera a senha
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}
