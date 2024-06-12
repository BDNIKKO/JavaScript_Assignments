let gmailData = {
    name: 'Gmail',
    mailboxes: [
        {
            name: 'Inbox',
            emails: [
                {
                    subject: 'Sample Template',
                    sender: 'Avalon Wilmington <no-reply@southwood.lead-mgmt.com>',
                    receiver: 'moppertn@gmail.com',
                    body: `Dear Residents,

                    Tomorrow the 12th our pool is being inspected. They should arrive around 10:00am. Due to us needing the swimming pool to be in tip top shape in order to pass inspection, we will have the pool closed until after the inspection is over. So, no swimming allowed and no use of the pool deck tomorrow morning.

Thank you for your understanding and patience!

Avalon of Wilmington Management Team

Alicia Banks, NALP | Southwood Realty
Community Manager | Avalon of Wilmington
910.254.4645 | www.southwoodrealty.com`,
                    date: 'Tue, Jun 11, 2024 at 12:07 PM',
                    status: 'unread'
                },
                {
                    subject: 'PHUS CUTS has accepted your appointment',
                    sender: 'PHUS CUTS <noreply@messaging.squareup.com>',
                    receiver: 'Nicholas Moppert <moppertn@gmail.com>',
                    body: `Your appointment has been accepted.

Saturday, June 8, 2024
3:15 PM - 4:00 PM EDT
Regular Men's Haircut (Select for Henry)
Henry
PHU'S CUTS
4405 Wrightsville Ave
Suite D
Wilmington, NC 28403
(267) 255-2759`,
                    date: 'Sat, Jun 8, 2024 at 1:58 PM',
                    status: 'unread'
                }
            ]
        },
        {
            name: 'Sent',
            emails: [
                {
                    subject: 'Re: Document signed: Program Enrollment PE-99644 for Nicholas David Moppert in Stiegler EdTech',
                    sender: 'Nicholas Moppert <moppertn@gmail.com>',
                    receiver: 'Cyndy Hummel <hummelc@nccommunitycolleges.edu>',
                    body: `Good morning!

I noticed on the Apprenticeship Participant Registration form that the boxes for "Veteran" and "Disability" were unchecked. I do not know if it is pertinent to update you, but I am a Disabled Veteran. I attached my retirement DD-214 and my Disability Claim Letter. Thank you so much, and I apologize if this information is irrelevant!

Very Respectfully,
Moppert, Nicholas D.
moppertn@gmail.com
910-228-1702`,
                    date: 'Fri, May 24, 2024 at 12:05 PM',
                    status: 'sent'
                },
                {
                    subject: 'Lease Avalon',
                    sender: 'moppertn@gmail.com',
                    receiver: 'cbarden@voacarolinas.org',
                    body: `Good Afternoon,

Attached is the current lease agreement.

V/R 
Moppert, Nicholas D.
Moppertn@gmail.com 
910-228-1702`,
                    date: 'Tue, Mar 12, 2024 at 2:30 PM',
                    status: 'sent'
                }
            ]
        },
        {
            name: 'Drafts',
            emails: [
                {
                    subject: 'Draft',
                    sender: 'moppertn@gmail.com',
                    receiver: 'resourcecenter@woundedwarriorproject.org',
                    body: 'follow up',
                    date: '2023-08-05',
                    status: 'draft'
                }
            ]
        }
    ]
};

let mailboxNames = [];
for (let i = 0; i < gmailData.mailboxes.length; i++) {
    mailboxNames.push(gmailData.mailboxes[i].name);
}
console.log('Mailbox Names:', mailboxNames);


let emailList = [];
for (let i = 0; i < gmailData.mailboxes.length; i++) {
    let mailbox = gmailData.mailboxes[i];
    for (let j = 0; j < mailbox.emails.length; j++) {
        emailList.push(mailbox.emails[j]);
    }
}
console.log('Email List:', emailList);


let inboxMailbox = gmailData.mailboxes.find(mailbox => mailbox.name === 'Inbox');

let secondEmailText = inboxMailbox.emails[1].body;
    console.log('Text of the second email:', secondEmailText);

let draftMailbox = gmailData.mailboxes.find(mailbox => mailbox.name === 'Drafts');

let sentMailbox = gmailData.mailboxes.find(mailbox => mailbox.name === 'Sent');

if (draftMailbox && draftMailbox.emails.length > 0) {
    let draftEmail = draftMailbox.emails[0];
    draftEmail.status = 'sent';
    sentMailbox.emails.push(draftEmail);
    draftMailbox.emails = draftMailbox.emails.filter(email => email !== draftEmail);
}

console.log('Updated Gmail Data:', gmailData);2
2
let newDraftEmail = {2
    subject: 'List of Appts',2
    sender: 'moppertn@gmail.com',2
    receiver: 'yamile.kaplancenter@gmail.com',2
    body: 'Thank you! I appreciate it.',2
    date: 'Apr 20, 2016',
    status: 'draft'
};
gmailData.mailboxes.find(mailbox => mailbox.name === 'Drafts').emails.push(newDraftEmail);

console.log('Gmail Data after Adding New Draft:', gmailData);
