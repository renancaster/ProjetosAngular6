import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    //this.tarefas = [  new Tarefa(1, "Tarefa 1", false),
    //                  new Tarefa(2, "Tarefa 2", true)]
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
}
