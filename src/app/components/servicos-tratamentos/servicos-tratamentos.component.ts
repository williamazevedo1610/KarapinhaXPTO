import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos-tratamentos',
  templateUrl: './servicos-tratamentos.component.html',
  styleUrl: './servicos-tratamentos.component.css'
})
export class ServicosTratamentosComponent {
  services = [
    { id: 1, image: '../../../assets/gallery/pexels-gabby-k-6621253.jpg', name: 'Serviço 1', description: 'Tratamento Profundo e mais outras coisas blablablabla, teste' },
    { id: 2, image: 'path-to-image2.jpg', name: 'Serviço 2', description: 'Descrição do serviço 2' },
    { id: 3, image: 'path-to-image3.jpg', name: 'Serviço 3', description: 'Descrição do serviço 3' },
    { id: 4, image: 'path-to-image4.jpg', name: 'Serviço 4', description: 'Descrição do serviço 4' },
    { id: 5, image: 'path-to-image5.jpg', name: 'Serviço 5', description: 'Descrição do serviço 5' },
    { id: 6, image: 'path-to-image6.jpg', name: 'Serviço 6', description: 'Descrição do serviço 6' },
    // Adicione mais serviços conforme necessário
  ];

}
