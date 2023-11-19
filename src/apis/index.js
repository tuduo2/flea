import{ UserLogin } from './user/login.js'
import{ UserRegister } from './user/register.js'
//订单相关
import{ upOrder } from './order/upOrder.js'
import{ newOrder } from './order/newOrder.js'
import{ getRomOrder } from './order/getRomdom.js'
import{ sellOrder } from './order/sellOrder.js'
import{ getAllOrderList } from './order/getAllorder.js'
import{ searchOrder } from './order/searchOrder.js'
import{ unListOrder } from './order/unListOrder.js'
import{ upListOrder } from './order/upListOrder.js'
import{ searchIdOrder } from './order/searchIdOrder.js'
// 图片相关
import{ Getimg } from './image/getimg.js'
import{ Upload } from './image/upload.js'

export {
	UserLogin,
	UserRegister,
	
	Getimg,
	Upload,
	
	upOrder,
	newOrder,
	getRomOrder,
	sellOrder,
	getAllOrderList,
	searchOrder,
	unListOrder,
	upListOrder,
	searchIdOrder 
}