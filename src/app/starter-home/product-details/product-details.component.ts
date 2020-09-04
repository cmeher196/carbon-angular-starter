import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  activeRadio = '';
  radio = '';
  allGeoData: Array<Object>
  checkBoxArr = []
  AllGeoChecked = 'false';
  _allGeo = true;
  _checkbox1 = 'false'
  constructor() { }

  ngOnInit() {
    // this.radio = 'two'
    this.allGeoData = [
      {
        name: "CheckBox-1",
        check: sessionStorage.getItem('checkedVal0')
      },
      {
        name: 'CheckBox-2',
        check: sessionStorage.getItem('checkedVal1')
      },
      {
        name: "CheckBox-3",
        check: sessionStorage.getItem('checkedVal2')
      },
      {
        name: "CheckBox-4",
        check: sessionStorage.getItem('checkedVal3')
      }
    ];
    console.log('I am checkedGeo....', sessionStorage.getItem('geochecked'));
    this.AllGeoChecked = sessionStorage.getItem('geochecked')


  }
  onChange(event) { // Package details Radio Button
    this.activeRadio = event.value;
    //console.log(event.value);
    console.log('radio.......', this.activeRadio);
    if (this.activeRadio === 'AllGeos') {
      sessionStorage.setItem('geochecked', 'true');
      this._allGeo = true;
    }
    if (this.activeRadio === 'SelectGeos')
      this._allGeo = false;
  }

  onCheckBox(event) {
    console.log('event..............', event.source.value);
    console.log('event..............', event);
    switch (event.source.id) {
      case "checkbox-0":
        sessionStorage.setItem('checkedVal0', 'true');
        this.checkBoxArr.push(event.source.value);
        break;
      case "checkbox-1":
        sessionStorage.setItem('checkedVal1', 'true');
        this.checkBoxArr.push(event.source.value);
        break;
      case "checkbox-2":
        sessionStorage.setItem('checkedVal2', 'true');
        this.checkBoxArr.push(event.source.value);
        break;
      case "checkbox-3":
        sessionStorage.setItem('checkedVal3', 'true');
        this.checkBoxArr.push(event.source.value);
        break;
      default:
        break;
    }
    console.log(this.checkBoxArr);
    sessionStorage.setItem('AllGeoCheckBox', JSON.stringify(this.checkBoxArr))
  }
}

