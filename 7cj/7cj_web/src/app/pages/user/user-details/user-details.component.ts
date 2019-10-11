import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {AlertService} from '../../../shared/alert.service'
import {LoadingService} from '../../../shared/loading.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    public imgurl = IMG_URL;
    public dataArr: any = {
        check_state: '',
    };
    public checkState: string;
    public causeAnalysis: String = '';
    public isExamine: string;
    public optionId: Array<any> = [];
    public policyAnnex: Array<any> = [];
    public policyName: Array<any> = [];

    constructor(public alert: AlertService,
                public loading: LoadingService,
                public service: UserService,
                public router: ActivatedRoute) {
        this.loading.show();
        this.router.params.subscribe(
            res => {
                this.optionId = res['id'];
                const params: any = {
                    id: res['id'],
                }
                this.service.seePolicy(params).subscribe(data => {
                        this.isExamine = data['state'];

                        this.loading.hide();
                        if (data['id']) {
                        this.dataArr = data;
                        // this.policyAnnex = JSON.parse(data['data']['policy_annex']);
                        // this.policyName = JSON.parse(data['data']['policy_annex_name']);

                        }else if (data['code'] === 500 ) {
                          this.alert.show('该用户暂时没有填写个人信息');
                          setTimeout( () => {
                            window.history.go(-1);
                          }, 1000)
                        }
                    },
                    error => {
                        this.loading.hide()
                        this.alert.show('系统繁忙，请联系管理员');
                    });
            }
        )
    }

    ngOnInit() {
    }

    back() {
        window.history.go(-1);
    }

    // toExamine() {
    //     if (this.checkState !== '1' && this.checkState !== '3') {
    //         this.alert.show('请选择审核状态');
    //         return;
    //     }
    //     // if (this.checkState === '3' && this.causeAnalysis === '') {
    //     //     this.alert.show('请输入审核不通过原因');
    //     //     return;
    //     // }
    //     this.loading.show();
    //     const params: any = {
    //         id: this.optionId,
    //         state: this.checkState,
    //     };
    //     this.service.policyCheck(params).subscribe(
    //         res => {
    //             this.loading.hide();
    //             if (res['code'] === 0) {
    //                 this.alert.show('审核成功');
    //                 setTimeout(() => {
    //                     window.history.go(-1);
    //                 }, 3000);
    //             } else {
    //                 this.alert.show(res['message']);
    //             }
    //         },
    //         error => {
    //             this.loading.hide();
    //             this.alert.show('服务器繁忙，请联系管理员');
    //         }
    //     )
    // }

}
