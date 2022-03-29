Vue.createApp({
    data() {
        return {
            message: 'Hello from Vue!',
            name: "",
            x: 4,
            y: 2,
            students: [
                {
                    name: "Mihai",
                    age: 21,
                    scolarship: 1234,
                    marks: [9, 9, 10, 8]
                },
                {
                    name: "Ion",
                    age: 24,
                    scolarship: 3333,
                    marks: [6, 7, 10, 8]
                }
            ],
            isWeekend: true,
            number: 0,
            appBackgroundColor: "white"
        }
    },
    watch: {
        appBackgroundColor() {
            alert(`Color changed to ${this.appBackgroundColor}`)
        }
    },
    computed: {
        sum(){
            return this.x + this.y;
        },
        totalSalary(){
            return this.students.reduce((sum, student) => sum + student.scolarship, 0)
        },
        reversedName(){
            return this.name.split("").reverse().join("");
        }
    },
    methods: {
        changeBackgroudColorToRed(){
            alert("Red selected")
            this.appBackgroundColor = "red";
        },
        changeBackgroudColorToGreen(){
            this.appBackgroundColor = "green";
        },
        changeBackgroudColorToBlue(){
            this.appBackgroundColor = "blue";
        }
    }
}).mount('#app')