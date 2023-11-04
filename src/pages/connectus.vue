<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="title">
                        <h1>Send A Message</h1>
                    </div>
                    <form >
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="">Subject</label>
                            <input type="text" placeholder="subject">

                        </div>
                        <div class="form-group">
                            <label for="">message</label>
                            <textarea rows="5" placeholder="write a message"></textarea>
                        </div>
                        <div class="form-group">
                        <button class="btn btn-dark">send</button>

                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="contact-info">
                        <h1>Reach On Us</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
}
.form-group{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

.form-group input,.form-group textarea{
    border: 1px solid rgba(128, 128, 128, 0.226);
    width: 100%;
}
input[type=textarea]{
    height: 500px;
}
h1{
    font-size: 20px;
}
</style>