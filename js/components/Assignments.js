import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {

    components: {

        AssignmentList,
        AssignmentCreate
    },

    template : `
        <section class="flex gap-10">
        
            <assignment-list :assignments="filters.inProgress" title="In Progress">
            
                <assignment-create @add="add"></assignment-create>
                
            </assignment-list>
            
            <div v-show="showCompleted">
            
                <assignment-list :assignments="filters.completed" title="Completed" can-toggle @toggle="showCompleted = !showCompleted">
            
                </assignment-list>
            </div>
        </section>
    `,

    data() {
        return {

            assignments: [],
            showCompleted: true
        }
    },

    created() {

        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => this.assignments = data);
    },

    computed: {

        filters() {

            return {

                inProgress : this.assignments.filter(a=> !a.complete),
                completed: this.assignments.filter(a=> a.complete),
            }
        }
    },

    methods: {

        add(name) {

            this.assignments.push({
                name : name,
                complete: false,
                id: this.assignments.length + 1,
                tag: "common"
            })
        }
    }
}