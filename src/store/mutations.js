import {REWRITE} from './mutations-type'

export default{
	[REWRITE](state,info){
		state.User=info
	}
}