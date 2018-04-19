//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2017 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2017 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

import {Component, Input} from '@angular/core';
import {TimezoneService} from 'core-components/datetime/timezone.service';
import {opUiComponentsModule} from 'core-app/angular-modules';
import {downgradeComponent} from '@angular/upgrade/static';

@Component({
  selector: 'op-date-time',
  template: `
    <span title="{{date}} {{ time }}">
      <span [textContent]="date"></span>
      <span [textContent]="time"></span>
    </span>'
  `
})
export class OpDateTimeComponent {

  @Input('dateTimeValue') dateTimeValue:any;

  public date:any;
  public time:any;

  constructor(readonly timezoneService:TimezoneService) {
  }

  ngOnInit() {
    var c = this.timezoneService.formattedDatetimeComponents(this.dateTimeValue);
    this.date = c[0];
    this.time = c[1];
  }
}

opUiComponentsModule.directive('opDateTime',
  downgradeComponent({ component: OpDateTimeComponent}));
