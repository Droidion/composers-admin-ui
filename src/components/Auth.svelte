<script lang="ts">
    import {push} from 'svelte-spa-router'

    function handleSignIn() {
        push('/composers')
    }
</script>

<template>
    <div class="d-inline-flex justify-content-center align-items-center vw-100 vh-100">
        <div class="card">
            <div class="card-body">
                <div class="m-sm-4">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" name="password" class="form-control"
                               placeholder="Enter your password">
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-primary" on:click={handleSignIn}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>