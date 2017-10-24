import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item';
import { SearchbarComponent } from './searchbar/searchbar';
@NgModule({
	declarations: [ListItemComponent,
    SearchbarComponent],
	imports: [],
	exports: [ListItemComponent,
    SearchbarComponent]
})
export class ComponentsModule {}
