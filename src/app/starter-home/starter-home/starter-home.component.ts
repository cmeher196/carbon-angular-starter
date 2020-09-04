import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { eventNames } from 'process';
import { IfStmt } from '@angular/compiler';


@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})
export class StarterHomeComponent implements OnInit {

	result = {}
	packageDetails = {}
	activeTab = 'First';
	activeRadio = ''
	model = new TableModel();
	size = "md"
	val0 = null
	val1 = null
	val2 = null
	val3 = null
	val4 = null
	val5 = null
	val6 = null
	val7 = null
	val8 = null
	val9 = null
	val10 = null
	svhc = []
	snur = []
	evnReportDTO = {}
	tableCheckBox: Array<string>

	@ViewChild("customSVHC", { static: false })
	protected customSVHC: TemplateRef<any>;

	@ViewChild("customSNUR", { static: false })
	protected customSNUR: TemplateRef<any>;
	@ViewChild("customFormTemplate", { static: false })
	protected customFormTemplate: TemplateRef<any>;

	ngOnInit(): void {
		this.model.header = [
			new TableHeaderItem({
				data: "Recycled Content"
			}),
			new TableHeaderItem({
				data: "Contain SVHC's?",
				// className: "my-class"
			}),
			new TableHeaderItem({
				data: "Contain SNUR's?",
				// className: "my-class"
			}),
			new TableHeaderItem({
				data: "America's weights(kg) RC%",
				//className: "my-class"
			})
		];
		// this.model.data = [
		// 	[new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })],
		// 	[new TableItem({ data: "Name 3" }), new TableItem({ data: "zwer" })],
		// 	[new TableItem({ data: "Name 2" }), new TableItem({ data: "swer" })],
		// 	[new TableItem({ data: "Name 4" }), new TableItem({data: "twer"})],
		// 	[new TableItem({ data: "Name 5" }), new TableItem({data: "twer"})],
		// 	[new TableItem({ data: "Name 6" }), new TableItem({data: "twer"})],
		// 	[new TableItem({ data: "Name 7" }), new TableItem({data: "twer"})]
		// ];
		this.tableCheckBox = [
			'Corrugated(20)',
			'Paper(22)',
			'Processed Wood(plywood/masonite/OSB/etc)',
			'Wood(50)',
			'High density polyethylene HDPE(2)',
			'Low density polyethylene LDPE(4)',
			'Expanded polyethylene EPE(4)',
			'Expanded polypropylene EPP(4)',
			'Polypropylene PP(5)',
			'Expanded polystyrene/arcel EPS(6)',
			'Polyurethane PU(7)'
		]
		
	}


	selected(event) {
		this.activeTab = event.name
		if (this.activeRadio != 'Second') {
			this.activeRadio = ''
			this.packageDetails['All Geos'] = JSON.parse(sessionStorage.getItem('AllGeoCheckBox'))
			// this.result['Package Details'] = this.packageDetails
			// console.log('result JSON', this.result);

		}
	}
	
	// onChange(event) { // Package details Radio Button
	// 	console.log(event.value);
	// 	this.activeRadio = event.value;
	// }

	onCheckPackage(event, data) {
		//console.log('value.....',value);
		console.log(event);
		switch (event.source.id) {
			case 'checkbox-4':
				this.val0 = 0
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Corrugated(20)" }), new TableItem({ data: "Corrugated", template: this.customSVHC }),
					new TableItem({ data: "Corrugated", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				//this.model.data.push([new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })])
				else {
					this.model.deleteRow(this.val0)
					this.val0 = null
				}
				break;
			case 'checkbox-5':
				this.val1 = 1
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Paper(22)" }), new TableItem({ data: "Paper", template: this.customSVHC }),
					new TableItem({ data: "Paper", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				//this.model.data.push([new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })])
				else {
					this.model.deleteRow(this.val1)
					this.val1 = null
				}
				break;
			case 'checkbox-6':
				this.val2 = 2
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Processed Wood(plywood/masonite/OSB/etc)" }), new TableItem({ data: "ProcessedWood", template: this.customSVHC }),
					new TableItem({ data: "ProcessedWood", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				//this.model.data.push([new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })])
				else {
					this.model.deleteRow(this.val2)
					this.val2 = null
				}
				break;
			case 'checkbox-7':
				this.val3 = 3
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Wood(50)" }), new TableItem({ data: "Wood", template: this.customSVHC }),
					new TableItem({ data: "Wood", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val3)
					this.val3 = null
				}
				//this.model.data.push([new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })])
				break;
			case 'checkbox-8':
				this.val4 = 4
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "High density polyethylene HDPE(2)" }), new TableItem({ data: "HDPE", template: this.customSVHC }),
					new TableItem({ data: "HDPE", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val4)
					this.val4 = null
				}
				break;
			case 'checkbox-9':
				this.val5 = 5
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Low density polyethylene LDPE(4)" }), new TableItem({ data: "LDPE", template: this.customSVHC }),
					new TableItem({ data: "LDPE", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val5)
					this.val5 = null
				}
				break;
			case 'checkbox-10':
				this.val6 = 6
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Expanded polyethylene EPE(4)" }), new TableItem({ data: "EPE", template: this.customSVHC }),
					new TableItem({ data: "EPE", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val6)
					this.val6 = null
				}
				break;
			case 'checkbox-11':
				this.val7 = 7
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Expanded polypropylene EPP(4)" }), new TableItem({ data: "EPP", template: this.customSVHC }),
					new TableItem({ data: "EPP", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val7)
					this.val7 = null
				}
				break;
			case 'checkbox-12':
				this.val8 = 8
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Polypropylene PP(5)" }), new TableItem({ data: "PP", template: this.customSVHC }),
					new TableItem({ data: "PP", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val8)
					this.val8 = null
				}
				break;
			case 'checkbox-13':
				this.val9 = 9
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Expanded polystyrene/arcel EPS(6)" }), new TableItem({ data: "EPS", template: this.customSVHC }),
					new TableItem({ data: "EPS", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val9)
					this.val9 = null
				}
				break;
			case 'checkbox-14':
				this.val10 = 10
				if (event.checked) {
					this.model.addRow([new TableItem({ data: "Polyurethane PU(7)" }), new TableItem({ data: "PU", template: this.customSVHC }),
					new TableItem({ data: "PU", template: this.customSNUR }), new TableItem({ template: this.customFormTemplate })])
				}
				else {
					this.model.deleteRow(this.val10)
					this.val10 = null
				}
				break;
			default:
				break;
		}
	}
	onSVHCChange(event, data) {
		if (data === 'Corrugated') {
			this.svhc.push({ "Corrugated": event.value })
		}
		if (data === 'Paper') {
			this.svhc.push({ "Paper": event.value })
		}
		if (data === 'ProcessedWood') {
			this.svhc.push({ "Processed": event.value })
		}
		if (data === 'Wood') {
			this.svhc.push({ "Wood": event.value })
		}
		if (data === 'HDPE') {
			this.svhc.push({ "HDPE": event.value })
		}
		if (data === 'LDPE') {
			this.svhc.push({ "LDPE": event.value })
		}
		if (data === 'EPE') {
			this.svhc.push({ "EPP": event.value })
		}
		if (data === 'EPP') {
			this.svhc.push({ "EPP": event.value })
		}
		if (data === 'PP') {
			this.svhc.push({ "PP": event.value })
		}
		if (data === 'EPS') {
			this.svhc.push({ "EPS": event.value })
		}
		if (data === 'PU') {
			this.svhc.push({ "PU": event.value })
		}
		sessionStorage.setItem('svhcData', JSON.stringify(this.svhc))
	}

	onSNURChange(event, data) {
		if (data === 'Corrugated') {
			this.snur.push({ "Corrugated": event.value })
		}
		if (data === 'Paper') {
			this.snur.push({ "Paper": event.value })
		}
		if (data === 'ProcessedWood') {
			this.snur.push({ "Processed Wood": event.value })
		}
		if (data === 'Wood') {
			this.snur.push({ "Wood": event.value })
		}
		if (data === 'HDPE') {
			this.snur.push({ "HDPE": event.value })
		}
		if (data === 'LDPE') {
			this.snur.push({ "LDPE": event.value })
		}
		if (data === 'EPE') {
			this.snur.push({ "EPE": event.value })
		}
		if (data === 'EPP') {
			this.snur.push({ "EPP": event.value })
		}
		if (data === 'PP') {
			this.snur.push({ "PP": event.value })
		}
		if (data === 'EPS') {
			this.snur.push({ "EPS": event.value })
		}
		if (data === 'PU') {
			this.svhc.push({ "PU": event.value })
		}
		sessionStorage.setItem('snurData', JSON.stringify(this.snur))
	}

	onSave() {
		console.log('button save');
		this.evnReportDTO['SNUR'] = JSON.parse(sessionStorage.getItem('snurData'))
		this.evnReportDTO['SVHC'] = JSON.parse(sessionStorage.getItem('svhcData'))
		this.result['Package Details'] = this.packageDetails
		this.result['envReportDTO'] = this.evnReportDTO
		console.log('result JSON', this.result);

	}
}
