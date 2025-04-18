import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentMessageComponent } from './student-message/student-message.component';
import { StudentOrderHistoryComponent } from './student-order-history/student-order-history.component';
import { RouterModule } from '@angular/router';
import { StudentQaComponent } from './student-qa/student-qa.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ListsujetsModeratorComponent } from './listsujets-moderator/listsujets-moderator.component';
import { SujetpfeFrontoffice } from './sujetpfe-frontoffice/sujetpfe-frontoffice.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { StudentReviewsComponent } from './student-reviews/student-reviews.component';
import { StudentReferralComponent } from './student-referral/student-referral.component';
import { StudentTicketsComponent } from './student-tickets/student-tickets.component';
import { StudentQuizDetailsComponent } from './student-quiz-details/student-quiz-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StudentSujetDetails} from "./student-sujet-details/student-sujet-details";
import {InstructorModule} from "../instructor/instructor.module";



@NgModule({
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    StudentMessageComponent,
    StudentOrderHistoryComponent,
    StudentQaComponent,
    StudentProfileComponent,
    SujetpfeFrontoffice,
    StudentQuizComponent,
    ListsujetsModeratorComponent,
    StudentReviewsComponent,
    StudentReferralComponent,
    StudentTicketsComponent,
    StudentQuizDetailsComponent,
    StudentSujetDetails
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FeatherIconModule,
    SharedModule,
    RouterModule,
    InstructorModule,
  ],
  exports: [
    ToastrModule // Export pour utilisation dans d'autres modules
  ]
})
export class StudentModule { }
