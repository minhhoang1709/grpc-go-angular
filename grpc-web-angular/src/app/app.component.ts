import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { PrimaryClient } from '../proto/primary_grpc_web_pb.js';
import { AddRequest, AddResponse } from '../proto/primary_pb.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'grpc-web-angular';
  @ViewChild('firstNum', { static: false }) firstNumRef: ElementRef;
  @ViewChild('secondNum', { static: false }) secondNumRef: ElementRef;
  firstNum: number;
  secondNum: number;
  result: number;
  private primaryClient: PrimaryClient;

  ngOnInit(): void {
    this.primaryClient = new PrimaryClient('http://localhost:8080', null, null);
  }

  onCaculate() {
    const addRequest: AddRequest = new AddRequest();
    addRequest.setNumber(+this.firstNumRef.nativeElement.value);
    addRequest.setAnothernumber(+this.secondNumRef.nativeElement.value);
    const metaData: any = {};
    this.primaryClient.sumNumber(addRequest, metaData, (err, response: AddResponse) => {
      this.result = response.getSum();
    });

  }
}
