import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentMessageComponent } from './student-message/student-message.component';
import { StudentQaComponent } from './student-qa/student-qa.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { StudentOrderHistoryComponent } from './student-order-history/student-order-history.component';
import { ListsujetsModeratorComponent } from './listsujets-moderator/listsujets-moderator.component';
import { SujetpfeFrontoffice } from './sujetpfe-frontoffice/sujetpfe-frontoffice.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { StudentReviewsComponent } from './student-reviews/student-reviews.component';
import { StudentReferralComponent } from './student-referral/student-referral.component';
import { StudentTicketsComponent } from './student-tickets/student-tickets.component';
import { StudentQuizDetailsComponent } from './student-quiz-details/student-quiz-details.component';
import {InstructorSujetDetails} from "../instructor/sujet-details/instructor-sujet-details";
import {StudentSujetDetails} from "./student-sujet-details/student-sujet-details";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'student-view',
        loadChildren: () =>
          import('./student-view/student-view.module').then(
            (m) => m.StudentViewModule
          ),
      },
      {
        path: 'student-profile',
        component: StudentProfileComponent,
      },
      {
        path: 'view-invoice',
        component: ViewInvoiceComponent,
      },
      { path: 'student-dashboard', component: StudentDashboardComponent },
      { path: 'student-qa', component: StudentQaComponent },
      { path: 'student-quiz', component: StudentQuizComponent },
      { path: 'student-message', component: StudentMessageComponent },
      {
        path: 'student-order-history',
        component: StudentOrderHistoryComponent,
      },
      {
        path: 'sujet-details/:id',
        component: StudentSujetDetails,
      },
      { path: 'listsujets-moderator', component: ListsujetsModeratorComponent },
      { path: 'sujetpfe-user', component: SujetpfeFrontoffice },
      { path: 'student-quiz-details', component: StudentQuizDetailsComponent },
      { path: 'student-reviews', component: StudentReviewsComponent },
      { path: 'student-referral', component: StudentReferralComponent },
      { path: 'student-tickets', component: StudentTicketsComponent },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
