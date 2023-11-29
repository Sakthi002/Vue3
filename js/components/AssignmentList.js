import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {

    components: {
        Assignment,
        AssignmentTags,
        Panel
    },

    template : `
        <Panel v-show="assignments.length" class="w-80">

            <div class="flex items-start justify-between">
            
                <h2 class="font-bold mb-2">{{ title }} ({{ assignments.length }})</h2>
                
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            
            <assignment-tags v-model="currentTag" :initialTags="assignments.map(a=>a.tag)">
            
            </assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">

                <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment">
                
                </assignment>
            </ul>
            
            <slot></slot>
            
            <template #footer>
                Footer goes here...
            </template>
        </Panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default : false }
    },

    data() {

        return {

            currentTag: "all"
        }
    },

    computed: {

        filteredAssignments() {

            if(this.currentTag === 'all') {

                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}