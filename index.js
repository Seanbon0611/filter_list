function filter_list(l) {
 return l.filter(el => typeof el !== "string");
}

filter_list(["a",2,"f",3,8,2,"g"])