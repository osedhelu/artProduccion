import { Component } from '@angular/core';
class Complaints {
  complaint: string;
  count: number
}

export class ComplaintsWithPercent {
  complaint: string;
  count: number;
  cumulativePercent: number;
}

let complaintsData: Complaints[] = [
  { complaint: "Cold pizza", count: 780 },
  { complaint: "Not enough cheese", count: 120 },
  { complaint: "Underbaked or Overbaked", count: 52 },
  { complaint: "Delayed delivery", count: 1123 },
  { complaint: "Damaged pizza", count: 321 },
  { complaint: "Incorrect billing", count: 89 },
  { complaint: "Wrong size delivered", count: 222 }
];
@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor() {

    this.dataSource = this.getComplaintsData()

  }

  dataSource: ComplaintsWithPercent[];

  getComplaintsData(): ComplaintsWithPercent[] {
    var data = complaintsData.sort(function (a, b) {
            return b.count - a.count;
        }),
        totalCount = data.reduce(function (prevValue, item) {
            return prevValue + item.count;
        }, 0),
        cumulativeCount = 0;
    return data.map(function (item, index) {
        cumulativeCount += item.count;
        return {
            complaint: item.complaint,
            count: item.count,
            cumulativePercent: Math.round(cumulativeCount * 100 / totalCount)
        };
    });
}

  customizeTooltip = (info: any) => {
      return {
          html: "<div><div class='tooltip-header'>" +
              info.argumentText + "</div>" +
              "<div class='tooltip-body'><div class='series-name'>" +
              "<span class='top-series-name'>" + info.points[0].seriesName + "</span>" +
              ": </div><div class='value-text'>" +
              "<span class='top-series-value'>" + info.points[0].valueText + "</span>" +
              "</div><div class='series-name'>" +
              "<span class='bottom-series-name'>" + info.points[1].seriesName + "</span>" +
              ": </div><div class='value-text'>" +
              "<span class='bottom-series-value'>" + info.points[1].valueText + "</span>" +
              "% </div></div></div>"
      };
  }
  customizeText(arg) {
    return "Day " + arg.valueText;
}
  customizeLabelText = (info: any) => {
      return info.valueText + "%";
  }
}
