import axios from 'axios'

export default {


sendMessage(data) {
  axios
  .put('http://parsdata.ir/api/fake', data)
  .then(alert('پیام شما با موفقیت ارسال شد'))
  
    .catch(alert('ارسال پیام به سرور متصل نیست'))
},

}
