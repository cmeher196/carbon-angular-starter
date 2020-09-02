import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	ButtonModule,
	ContentSwitcherModule,
	RadioModule,
	CheckboxModule,
	ModalModule,
	PlaceholderModule,
	SelectModule,
	TableModule,
	InputModule,	
} from 'carbon-components-angular';
import { StarterHomeRoutingModule } from './starter-home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		StarterHomeRoutingModule,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		ButtonModule,
		ContentSwitcherModule,
		RadioModule,
		FormsModule,
		CheckboxModule,
		ModalModule,
		PlaceholderModule,
		SelectModule,
		TableModule,
		InputModule
	],
	declarations: [StarterHomeComponent]
})
export class StarterHomeModule { }
