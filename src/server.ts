import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*", // Permite requisições de qualquer origem
});

const teams = [
    { id: 1, name: "Ferrari", base: "Maranello, Italy" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "AlphaTauri", base: "Faenza, Italy" }, // possível mudança de nome para Visa Cash App RB
    { id: 9, name: "Alfa Romeo", base: "Hinwil, Switzerland" }, // até 2023, agora Stake F1 Team Kick Sauber
    { id: 10, name: "Haas", base: "Kannapolis, United States" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Carlos Sainz", team: "Ferrari" }, // pode mudar após 2024 dependendo do mercado
    { id: 5, name: "Lewis Hamilton", team: "Ferrari" }, // confirmado a ida para Ferrari em 2025
    { id: 6, name: "George Russell", team: "Mercedes" },
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Pierre Gasly", team: "Alpine" },
    { id: 12, name: "Esteban Ocon", team: "Alpine" },
    { id: 13, name: "Alexander Albon", team: "Williams" },
    { id: 14, name: "Logan Sargeant", team: "Williams" },
    { id: 15, name: "Yuki Tsunoda", team: "Visa Cash App RB" },
    { id: 16, name: "Daniel Ricciardo", team: "Visa Cash App RB" },
    { id: 17, name: "Valtteri Bottas", team: "Stake F1 Team Kick Sauber" },
    { id: 18, name: "Zhou Guanyu", team: "Stake F1 Team Kick Sauber" },
    { id: 19, name: "Kevin Magnussen", team: "Haas" },
    { id: 20, name: "Nico Hülkenberg", team: "Haas" }
];


// Busca todos os teams
server.get('/teams', async (request, response) => {
    response.type("application/json").code(200);
    return { teams }
})

//Busca todos os drivers
server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers }
})


// Busca driver por ID
interface DriveParams {
    id: string;
}

server.get<{ Params: DriveParams }>("/drivers/:id", async (request, response) => {
    const { id } = request.params;
    const driver = drivers.find((d) => d.id === Number(id))

    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver not found" }
    } else {
        response.type("application/json").code(200);
        return { driver }
    }
})


//Busca team por ID
interface TeamParams {
    id: string;
}

server.get<{ Params: TeamParams }>("/team/:id", async (request, response) => {
    const { id } = request.params;
    const team = teams.filter((t) => t.id === Number(id))

    if (!team) {
        response.type("application/json").code(404);
        return { message: "Driver not found" }
    } else {
        response.type("application/json").code(200);
        return { team }
    }

})

//Buscar motoristas por time
interface DriversByParams {
    id: string;
}

server.get<{ Params: DriversByParams }>("/teams/:id/drivers", async (request, response) => {
    const { id } = request.params;
    const team = teams.find((t) => t.id === Number(id))

    if (team) {
        const driversByTeam = drivers.filter((d) => d.team === team.name)
        response.type("application/json").code(200);
        return { driversByTeam }
    } else {
        response.type("application/json").code(404);
        return { message: "Driver not found" }
    }

})


server.listen({ port: 3333 }, () => {
    console.log("Server init");
})