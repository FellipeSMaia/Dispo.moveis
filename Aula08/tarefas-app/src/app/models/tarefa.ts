import { StatusTarefa } from "./status-tarefa";

export interface Tarefa {
    id: Number;
    titulo: string;
    descricao: string;
    status: StatusTarefa;
}
