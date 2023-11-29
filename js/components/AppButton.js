export default {

    template: `
        <button :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed' : true,
                'bg-blue-500 hover:bg-blue-700 text-white' : type === 'primary',
                'bg-purple-500 hover:bg-purple-700 text-white' : type === 'secondary',
                'bg-gray-500 hover:bg-gray-700 text-white' : type === 'muted',
                'is-loading' : processing
            }"
            :disabled="processing">
            <slot></slot>
        </button>
    `,

    props: {

        type: { type: String, default: 'primary' },

        processing: { type: Boolean, default: false }
    }
}