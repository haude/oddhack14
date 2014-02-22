var popnDensity = {
    title : 'Nepal Population Report 2011',
    // dr:{
    //     data:{
    //         e:{
    //             metric:205,
    //             text:'Headquarter: <b>Dhankuta</b>',
    //             img:'assets/img/dhankuta.jpg'
    //         },
    //         c:{
    //             metric:354,
    //             text:'Headquarter: <b>Kathmandu</b>',
    //             img:'assets/img/kathmandu.jpg'
    //         },
    //         w:{
    //             metric:168,
    //             text:'Headquarter: <b>Pokhara</b>',
    //             img:'assets/img/pokhara.jpg'

    //         },
    //         mw:{
    //             metric:85,
    //             text:'Headquarter: <b>Birendranagar</b>',
    //             img:'assets/img/birendranagar.jpg'

    //         },
    //         fw:{
    //             metric:130,
    //             text:'Headquarter: <b>Dipayal</b>',
    //             img:'assets/img/dipayal.jpg'

    //         }
    //     },
    //     template:'#drTemplate'
    // },
    district:{
        data:{
            taplejung		:{metric:134698,  school: 339, text:''},
            panchthar		:{metric:202056,  school: 436, text:''},
            illam		:{metric:282806,  school: 492, text:''},
            jhapa		:{metric:688109,  school: 684, text:''},
            morang		:{metric:843220,  school: 707, text:''},
            sunsari		:{metric:625633,  school: 0745, text:''},
            dhankuta		:{metric:166479,  school: 340, text:''},
            terathum		:{metric:113111,  school: 253, text:''},
            sankhuwasava	:{metric:159203,  school: 414, text:''},
            bhojpur		:{metric:203018,  school: 404, text:''},
            solukhumbu		:{metric:107686,  school: 290, text:''},
            okhaldhunga		:{metric:156702,  school: 368, text:''},
            khotang		:{metric:231385,  school: 484, text:''},
            udaypur		:{metric:287689,  school: 472, text:''},
            saptari		:{metric:570282,  school: 484, text:''},
            siraha		:{metric:572399,  school: 469, text:''},
            dhanusa		:{metric:671364,  school: 397, text:''},
            mahattori		:{metric:553481,  school: 415, text:''},
            sarlahi		:{metric:635701,  school: 745, text:''},
            sindhuli		:{metric:279821,  school: 581, text:''},
            ramechhap		:{metric:212408,  school: 492, text:''},
            dolakha		:{metric:204229,  school: 431, text:''},
            sindhupalchok	:{metric:305857,  school: 556, text:''},
            kavre		:{metric:385672,  school: 696, text:''},
            lalitpur		:{metric:337785,  school: 488, text:''},
            bhaktapur		:{metric:225461,  school: 355, text:''},
            kathmandu		:{metric:1081845, school: 1370, text:''},
            nuwakot		:{metric:288478,  school: 521, text:''},
            rasuwa		:{metric:44731,   school: 113, text:''},
            dhading		:{metric:338658,  school: 634, text:''},
            makwanpur		:{metric:392604,  school: 597, text:''},
            rautahat		:{metric:545132,  school: 487, text:''},
            bara		:{metric:559135,  school: 418, text:''},
            parsa		:{metric:497219,  school: 392, text:''},
            chitwan		:{metric:472048,  school: 543, text:''},
            gorkha		:{metric:288134,  school: 553, text:''},
            lamjung		:{metric:177149,  school: 424, text:''},
            tanahu		:{metric:315237,  school: 650, text:''},
            syanja		:{metric:317320,  school: 637, text:''},
            kaski		:{metric:380527,  school: 645, text:''},
            manang		:{metric:9587,    school: 32, text:''},
            mustang		:{metric:14981,   school: 70, text:''},
            myagdi		:{metric:114447,  school: 273, text:''},
            parbat		:{metric:157826,  school: 369, text:''},
            baglung		:{metric:268937,  school: 594, text:''},
            gulmi		:{metric:296654,  school: 615, text:''},
            palpa		:{metric:268558,  school: 496, text:''},
            nawalparasi		:{metric:562870,  school: 706, text:''},
            rupandehi		:{metric:708419,  school: 597, text:''},
            kapilvastu		:{metric:481976 , school: 511, text:''},
            arghakhanchi	:{metric:208391,  school: 451, text:''},
            pyuthan		:{metric:212484,  school: 373, text:''},
            rolpa		:{metric:210004,  school: 423, text:''},
            rukum		:{metric:188438,  school: 391, text:''},
            salyan		:{metric:213500,  school: 454, text:''},
            dang		:{metric:462380,  school: 512, text:''},
            banke		:{metric:385840,  school: 436, text:''},
            bardia		:{metric:382649,  school: 350, text:''},
            surkhet		:{metric:288527,  school: 581, text:''},
            dailekh		:{metric:225201,  school: 508, text:''},
            jajarkot		:{metric:134868,  school: 430, text:''},
            dolpa		:{metric:29545,   school: 121, text:''},
            jumla		:{metric:89427,   school: 155, text:''},
            kalikot		:{metric:105580,  school: 288, text:''},
            mugu		:{metric:43937,   school: 152, text:''},
            humla		:{metric:40595,   school: 135, text:''},
            bajura		:{metric:108781,  school: 262, text:''},
            bajhang		:{metric:167026,  school: 457, text:''},
            achham		:{metric:231285,  school: 502, text:''},
            doti		:{metric:207066,  school: 381, text:''},
            kailali		:{metric:616697,  school: 605, text:''},
            kanchanpur		:{metric:377899,  school: 430, text:''},
            dadeldhura		:{metric:126162,  school: 263, text:''},
            baitadi		:{metric:234418 , school: 554, text:''},
            darchula		:{metric:121996,  school: 361, text:''}
        },
        template:'#districtTemplate'
    }

}


var annualGrowthRate = {
    title : 'Annual Growth Rate 2011 Census',
    dr:{
        data:{
            e:{
                metric:0.88,
                text:'Headquarter: <b>Dhankuta</b>',
            },
            c:{
                metric:1.90,
                text:'Headquarter: <b>Kathmandu</b>'
            },
            w:{
                metric:0.79,
                text:'Headquarter: <b>Pokhara</b>'
            },
            mw:{
                metric:1.74,
                text:'Headquarter: <b>Birendranagar</b>'
            },
            fw:{
                metric:1.49,
                text:'Headquarter: <b>Dipayal</b>'
            }
        },
        template:'#drTemplateGR'
    },
    district:{
        data:{
            taplejung:{metric:-0.47, text:''},
            panchthar:{metric:-0.18, text:''},
            illam:{metric:0.45, text:''},
            jhapa:{metric:1.64, text:''},
            morang:{metric:1.35, text:''},
            sunsari:{metric:1.83, text:''},
            dhankuta:{metric:-0.14, text:''},
            terathum:{metric:-1.06, text:''},
            sankhuwasava:{metric:0.03, text:''},
            bhojpur:{metric:-0.99, text:''},
            solukhumbu:{metric:-0.09, text:''},
            okhaldhunga:{metric:-0.55, text:''},
            khotang:{metric:-1.01, text:''},
            udaypur:{metric:1.13, text:''},
            saptari:{metric:1.25, text:''},
            siraha:{metric:1.17, text:''},
            dhanusa:{metric:1.35, text:''},
            mahattori:{metric:1.55, text:''},
            sarlahi:{metric:1.90, text:''},
            sindhuli:{metric:0.52, text:''},
            ramechhap:{metric:-0.34, text:''},
            dolakha:{metric:-0.82, text:''},
            sindhupalchok:{metric:-0.55, text:''},
            kavre:{metric:0.11, text:''},
            lalitpur:{metric:3.23, text:''},
            bhaktapur:{metric:2.96, text:''},
            kathmandu:{metric:4.76, text:''},
            nuwakot:{metric:-0.34, text:''},
            rasuwa:{metric:-0.21, text:''},
            dhading:{metric:-0.07, text:''},
            makwanpur:{metric:0.85, text:''},
            rautahat:{metric:2.45, text:''},
            bara:{metric:2.26, text:''},
            parsa:{metric:1.91, text:''},
            chitwan:{metric:1.83, text:''},
            gorkha:{metric:-0.67, text:''},
            lamjung:{metric:-0.46, text:''},
            tanahu:{metric:0.48, text:''},
            syanja:{metric:-0.97, text:''},
            kaski:{metric:2.54, text:''},
            manang:{metric:-3.84, text:''},
            mustang:{metric:-0.82, text:''},
            myagdi:{metric:-0.06, text:''},
            parbat:{metric:-0.71, text:''},
            baglung:{metric:0.04, text:''},
            gulmi:{metric:-0.45, text:''},
            palpa:{metric:0.03, text:''},
            nawalparasi:{metric:1.22, text:''},
            rupandehi:{metric:2.25, text:''},
            kapilvastu:{metric:1.69, text:''},
            arghakhanchi:{metric:-0.39, text:''},
            pyuthan:{metric:1.01, text:''},
            rolpa:{metric:0.78, text:''},
            rukum:{metric:1.13, text:''},
            salyan:{metric:1.32, text:''},
            dang:{metric:1.88, text:''},
            banke:{metric:2.45, text:''},
            bardia:{metric:1.10, text:''},
            surkhet:{metric:2.22, text:''},
            dailekh:{metric:1.58, text:''},
            jajarkot:{metric:2.46, text:''},
            dolpa:{metric:2.17, text:''},
            jumla:{metric:1.95, text:''},
            kalikot:{metric:2.94, text:''},
            mugu:{metric:2.30, text:''},
            humla:{metric:2.28, text:''},
            bajura:{metric:2.20, text:''},
            bajhang:{metric:1.61, text:''},
            achham:{metric:1.09, text:''},
            doti:{metric:0.23, text:''},
            kailali:{metric:2.22, text:''},
            kanchanpur:{metric:1.62, text:''},
            dadeldhura:{metric:1.15, text:''},
            baitadi:{metric:0.73, text:''},
            darchula:{metric:0.9, text:''}
        },
        template:'#districtTemplateGR'
    }

}
