import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { SharedState } from '../../../shared/store/shared.state';
import { RepoInfo } from '../../../shared/model/info.interface';
import { Observable } from 'rxjs';
import { HomeState } from '../../store/home.state';
import { Languages } from '../../../shared/model/languages.interface';
import { ChartData, LineChartData } from '../../../shared/model/charts.interface';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  @Select(SharedState.info)
  info$: Observable<RepoInfo>;
  @Select(HomeState.languages)
  languages$: Observable<ChartData>;
  @Select(HomeState.contributors)
  contributors$: Observable<ChartData>;
  @Select(HomeState.participation)
  participation$: Observable<LineChartData>;

  // charts options
  xAxisLabel: string = 'Week';
  yAxisLabel: string = 'Commits';
  colorScheme: { domain: string[] } = {
    domain: ['#FE7675', '#2095F2', '#4DAE4E', '#FE9900']
  };

  constructor() {
  }
}
