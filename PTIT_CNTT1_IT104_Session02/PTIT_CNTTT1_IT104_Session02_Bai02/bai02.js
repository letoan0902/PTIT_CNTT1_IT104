const greetingWithWeather = (name1, weather)=>{
    if(weather==="sunny"){
        console.log(`Chào ${name1}! Hôm nay trời nắng tuyệt vời`);
    }else if(weather==="rainy"){
        console.log(`Chào ${name1}! Hôm nay trời mưa, hãy mang theo ô`);
    }else {
        console.log(`Chào ${name1}! Hôm nay thời tiết không xác định`);
    }
}

greetingWithWeather("Nguyễn An", "sunny")
greetingWithWeather("Lê Toàn", "rainy")
greetingWithWeather("Trần Tâm", "other")

