# 🏎️ API F1 Teams & Drivers

Este projeto é uma API REST construída com **Fastify** que fornece informações sobre **equipes (teams)** e **pilotos (drivers)** da Fórmula 1.

## 🚀 Tecnologias utilizadas

- [Fastify](https://www.fastify.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [@fastify/cors](https://github.com/fastify/fastify-cors)

---
## 📦 Endpoints

### ✅ GET /teams
Retorna todas as equipes cadastradas no sistema.
**Resposta:**
```json
{
  "teams": [
    { "id": 1, "name": "Ferrari", "base": "Maranello, Italy" },
    { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" }
  ]
}
```

### ✅ GET /teams/:id
```json
{
  "team": [
    { "id": 1, "name": "Ferrari", "base": "Maranello, Italy" }
  ]
}
```

### ✅ GET /drivers
```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Sergio Pérez", "team": "Red Bull Racing" },
  ]
}
```

### ✅ GET /drivers/:id
```json
{
  "driver": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" }
  ]
}
```

### ✅ GET /teams/:id/drivers
```json
{
  "driversByTeam": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Sergio Pérez", "team": "Red Bull Racing" }
  ]
}
```

### ✅ GET /drivers/:id/team
```json
{
  "teamByDriver": [
    { "id": 1, "name": "Red Bull Racing", "base": "Milton Keynes, United Kingdom" }
  ]
}
```

# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório
cd seu-repositorio

# Instale as dependências
npm install

# Execute o servidor
npm run dev

