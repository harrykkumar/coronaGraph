import { Component ,ViewChild,ElementRef, AfterViewInit} from '@angular/core';
import * as _ from 'lodash'
import {MOCK_DATA} from './mock_data'
import {Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'coronaGraph';
  stateName:string
  ReportData:any =[]
  
  @ViewChild('coronaIdm') coronaId: ElementRef;
  ngAfterViewInit (){
    this.ReportData =MOCK_DATA
    this.selectState('Delhi')
  }
  selectState(state){
    this.stateName = state
      this.getOnload(state)
  }
    getOnload(state){
      let confiremed_case =[]
      let active_case =[]
      let dateWise =[]

      let select_state =_.filter(this.ReportData,(element) => {
        if(state===element.state ){
          return true
        }
      });
       _.map(select_state[0].case,(d)=>{
        dateWise.push(d.date)
        confiremed_case.push(d.confirmed_cases)
        active_case.push(d.active_case)
      })
      let barChartData = {
        labels: dateWise,
        datasets: [
          {
            
            type: 'line',
              label: "Confirmed Cases",
              title: "Secondary X Axis",
                data: confiremed_case,
                fill: false,
                backgroundColor: '#EC932F',
                borderColor: '#EC932F',
                hoverBackgroundColor: '#EC932F',
                hoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-1'
        }, {
            label: "Active Cases",
                type:'line',
                data: active_case,
                fill: false,
                borderColor: 'red',
                backgroundColor: '',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red',
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'red',
                yAxisID: 'y-axis-2',
        } 
      ]
    };


    
      let ctx = (this.coronaId.nativeElement).getContext('2d');
  
       new Chart(ctx, {
        type: 'line',
        data: barChartData,
        options: {
        responsive: true,
        tooltips: {
          mode: 'label'
      },
      elements: {
        line: {
            fill: false
        }
    },
      scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display: true
            }
        }],
        yAxes: [{
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines:{
                display: true,
                
            }
        }, {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines:{
                display: true
            }
        }]
    }
    }
    });
    }

}


