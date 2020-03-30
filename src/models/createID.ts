const createdID = {
    id: JSON.parse(window.localStorage.getItem('tagID') || '4') as number,
    created() {
        this.id++;
        window.localStorage.setItem('tagID', JSON.stringify(this.id));
        return this.id;

    }
};

export default createdID