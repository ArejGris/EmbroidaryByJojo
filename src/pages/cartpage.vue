<template>
    <div>
        <ol>
            <li>view cart</li>
            <li>check out</li>
            <li>confirm order</li>
        </ol>
    </div>
    <h4>no product found</h4>
</template>
<style scoped>
ol{
    list-style: none;
    display: flex;
}
li::after{
    content: '>';
}
h4{
    color: red;
}
</style>