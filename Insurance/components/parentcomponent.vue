<template>
	<div>
    <logo></logo>
	<titleComp></titleComp>
	<agentDescComp></agentDescComp>
	<mapComp></mapComp>
	<introductionComp></introductionComp>
	<aboutUs></aboutUs>
	<whyusComp></whyusComp>
	<ourTeamComp></ourTeamComp>
    <personalAgentComp></personalAgentComp>
    <ourservice></ourservice>
    <mythsComp></mythsComp>
    <contactus></contactus>
	</div>
</template>

<script>
    import logo from './datacomponent/logo.vue'
    import titleComp from './datacomponent/title.vue'
    import agentDescComp from '@/components/datacomponent/agentdetails.vue'
    import mapComp from '@/components/datacomponent/map.vue'
    import introductionComp from '@/components/datacomponent/introduction.vue'
    import aboutUs from '@/components/datacomponent/aboutus.vue'
    import whyusComp from '@/components/datacomponent/whyus.vue'
    import ourTeamComp from '@/components/datacomponent/team.vue'
    import personalAgentComp from '@/components/datacomponent/personalagent.vue'
    import ourservice from '@/components/datacomponent/ourservice.vue'
    import mythsComp from '@/components/datacomponent/myths.vue'
    import contactus from '@/components/datacomponent/contactus.vue'
    export default {
        components: {
            logo,
            titleComp,
            agentDescComp,
            mapComp,
            introductionComp,
            aboutUs,
            whyusComp,
            ourTeamComp,
            personalAgentComp,
            ourservice,
            mythsComp,
            contactus
        }
    }
</script>