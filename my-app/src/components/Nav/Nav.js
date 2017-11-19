import react,{Component} from 'react';

clss Nav extends Component(){
  constructor(){
		super();
    this.state={
			navData : [
				{title:"推荐",checked:true,show:true},
				{title:"新闻",checked:false,show:true},
				{title:"财经",checked:false,show:true},
				{title:"体育",checked:false,show:true},
				{title:"娱乐",checked:false,show:true},
				{title:"教育",checked:false,show:true},
				{title:"军事",checked:false,show:true},
				{title:"科技",checked:false,show:true},
				{title:"NBA",checked:false,show:false},
				{title:"股票",checked:false,show:false},
				{title:"星座",checked:false,show:false},
				{title:"女性",checked:false,show:false},
				{title:"健康",checked:false,show:false},
				{title:"育儿",checked:false,show:false}
			]
		}
    render(){
      return(
        <div className="">

        </div>
      )
    }
  }
}
