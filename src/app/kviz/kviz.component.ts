import { Component } from '@angular/core';

@Component({
  selector: 'app-kviz',
  templateUrl: './kviz.component.html',
  styleUrls: ['./kviz.component.css']
})
export class KvizComponent {
  questions = [
    {
      prompt: 'Кој е вистинскиот татко на Jon Snow?',
      choices: ['Ned Stark', 'Rhaegar Targaryen', 'Tywin Lannister',  'Robert Baratheon'],
      answer: 1
    },
    {
      prompt: 'Која е познатата Mother of Dragons?',
      choices: ['Cersei Lannister', 'Margaery Tyrell', 'Daenerys Targaryen', 'Catelyn Stark'],
      answer: 2
    },
    {
      prompt: 'Чија е познатата изрека "Winter is Coming"?',
      choices: ['Eddard Stark', 'Jon Snow', 'Tyrion Lannister', 'Bran Stark'],
      answer: 0
    },
    {
      prompt: 'Кого нарекуваат Knight King?',
      choices: ['Gregor Clegane', 'Joffrey Baratheon', 'The Night King', 'Ramsay Bolton'],
      answer: 2
    },
    {
      prompt: 'Кој беше избран за крал на Седумте Кралства на крајот на серијата?',
      choices: ['Joffrey Baratheon', 'Bran Stark', 'Jon Snow'],
      answer: 1
    },
    {
      prompt: 'Кој ја тренираше Arya Stark во Braavos да стане "Faceless Man"?',
      choices: ['The Hound', 'Syrio Forel', ' Jaqen Hghar'],
      answer: 2
    },
    {
      prompt: 'Дали ти се допадна квизот?',
      choices: ['ДА!', 'Не :(', 'No comment'],
      answer: 0
    }
  ];
  selectedAnswers: number[] = [];
  questionIndex = 0;
  
  constructor() {this.selectedAnswers = new Array(this.questions.length);}
  
  selectAnswer(answer: { questionIndex: number, choiceIndex: number }) {
    this.selectedAnswers[answer.questionIndex] = answer.choiceIndex;
    this.questionIndex = answer.questionIndex + 1;
  }
  
}
